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
  (-> js/d3
      (.select el)
      (.append "svg")
      (.attr #js {:viewBox (str 0 " " 0 " " 960 " " 500)})
      (.append "g")
      (.attr #js {:transform (str "translate(" (:left margin) "," (:right margin) ")")})))

(defn- setUpAxes [svg xScale yScale height]
  (let [xAxis (-> js/d3 (.-svg) (.axis) (.scale xScale) (.orient "bottom"))
        yAxis (-> js/d3 (.-svg) (.axis) (.scale yScale) (.orient "left"))]
    (-> svg
        (.append "g")
        (.attr #js {:class "x axis"
                    :transform (str "translate(0," height ")")})
        (.call xAxis))
    (-> svg
        (.append "g")
        (.attr #js {:class "y axis"})
        (.call yAxis))))

(defn- draw [el margin chart-data duration width height]
  (let [svg (create-svg el margin)
        xScale (xScale chart-data width)
        yScale (yScale chart-data height)]
    (-> svg (.selectAll ".bar")
        (.data (clj->js chart-data))
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
    (setUpAxes svg xScale yScale height)))

(defn draw-chart [props owner]
  (let [container "responsiveContainer"]
    (reify
      om/IRender
      (render [this]
        (html [:div {:id container}]))
      om/IDidMount
      (did-mount [_]
        (let [chart-data (om/get-state owner :chart-data)]
          (draw (str "#" container)
                (:margin props)
                chart-data
                (:transitionDuration props)
                (:width props)
                (:height props)))))))


