(ns ^:figwheel-always graph.chart
    (:require [om.core :as om :include-macros true]
              [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defn- xScale [chart-data width]
  (-> js/d3
      (.-scale)
      (.ordinal)
      (.rangeRoundBands #js [0 width] .1 1)
      (.domain (clj->js (map #(:Id %) chart-data)))))

(defn- yScale [chart-data height]
  (-> js/d3
      (.-scale)
      (.linear)
      (.range #js [height 0])
      (.domain (clj->js [0 (-> js/d3
                               (.max (clj->js chart-data)
                                     (fn [d] (.-Value d))))]))))

(defn- create-svg [el margin]
  (let [container (str "#" el)
        numNodes (-> js/document (.getElementById el) (.-childNodes) (.-length))]
    (if (= 0 numNodes)
      (-> js/d3
          (.select container)
          (.append "svg")
          (.attr #js {:viewBox (str 0 " " 0 " " 960 " " 500)})
          (.append "g")
          (.attr #js {:transform (str "translate(" (:left margin) "," (:right margin) ")")}))
      (-> js/d3 (.select container) (.select "svg") (.select "g")))))

(defn- get-svg [el]
  (let [container (str "#" el)]
    (-> js/d3
        (.select container)
        (.select "svg")
        (.select "g"))))

(defn- reScaleAxes [yScale duration]
  (let [yAxisEl (-> js/d3 (.select ".y.axis"))
        yAxis (-> js/d3 (.-svg) (.axis) (.scale yScale) (.orient "left"))]
    (-> yAxisEl
        (.transition)
        (.duration duration)
        (.delay duration)
        (.ease "sin-in-out")
        (.call yAxis))))

(defn- setUpAxes [svg xScale yScale height duration]
  (let [xAxis (-> js/d3 (.-svg) (.axis) (.scale xScale) (.orient "bottom"))
        yAxis (-> js/d3 (.-svg) (.axis) (.scale yScale) (.orient "left"))]
    (-> svg
        (.append "g")
        (.attr #js {:class "x axis"
                    :transform (str "translate(0," height ")")})
        (.transition)
        (.duration duration)
        (.call xAxis))
    (-> svg
        (.append "g")
        (.attr #js {:class "y axis"})
        (.transition)
        (.duration duration)
        (.call yAxis))))

(defn- draw [el chart-data duration width height xScale yScale]
  (let [svg (get-svg el)
        bars (-> svg (.selectAll ".bar") (.data (clj->js chart-data)))]
    (-> bars
        (.enter)
        (.append "rect")
        (.attr #js {:class "bar"
                    :width (.rangeBand xScale)
                    :height 0
                    :y (fn [d] (nth (.range yScale) 0))
                    :x (fn [d] (xScale (.-Id d)))})
        (.style #js {:fill "#2ECC40"})
        (.transition)
        (.duration duration)
        (.attr #js {:height (fn [d] (- height (yScale (.-Value d))))
                    :y  (fn [d] (yScale (.-Value d)))}))
    (-> bars
        (.transition)
        (.duration duration)
        (.delay duration)
        (.attr #js {:width (.rangeBand xScale)
                    :x (fn [d] (xScale (.-Id d)))
                    :y (fn [d] (yScale (.-Value d)))
                    :height (fn [d] (- height (yScale (.-Value d))))})
        (.each "end" (fn [] (this-as this
                                     (-> js/d3
                                         (.select this)
                                         (.transition)
                                         (.duration duration)
                                         (.style #js {:fill "#0074D9"}))))))))

(defn draw-chart [props owner]
  (let [container "responsiveContainer"]
    (reify
      om/IRender
      (render [this]
        (html [:div {:id container}]))
      om/IDidMount
      (did-mount [_]
        (let [chart-data (om/get-state owner :chart-data)
              svg (create-svg container (:margin props))
              width (:width props)
              height (:height props)
              xScale (xScale chart-data width)
              yScale (yScale chart-data height)]
          (setUpAxes svg xScale yScale height (:transitionDuration props))
          (draw container
                chart-data
                (:transitionDuration props)
                (:width props)
                (:height props)
                xScale
                yScale)))
      om/IDidUpdate
      (did-update [_ _ _]
        (let [chart-data (om/get-state owner :chart-data)
              width (:width props)
              height (:height props)
              xScale (xScale chart-data width)
              yScale (yScale chart-data height)]
          (reScaleAxes yScale (:transitionDuration props))
          (draw container
                chart-data
                (:transitionDuration props)
                (:width props)
                (:height props)
                xScale
                yScale))))))


