(ns ^:figwheel-always graph.chart
    (:require [om.core :as om :include-macros true]
              [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(defn- create-svg [el margin]
  (-> js/d3
      (.select el)
      (.append "svg")
      (.attr #js {:viewBox (str 0 " " 0 " " 960 " " 500)})
      (.append "g")
      (.attr #js {:transform (str "translate(" (:left margin) "," (:right margin) ")")})))

(defn- draw [el margin chart-data]
  (let [svg (create-svg el margin)]
    (-> svg (.selectAll ".bar")
        (.data (clj->js chart-data))
        (.enter)
        (.append "rect")
        (.attr #js {:class "bar"
                    :width 40
                    :height (fn [d] (* (.-Value d) 10))
                    :y 0
                    :x (fn [d i] (* i 46))})
        (.style #js {:fill "#2ECC40"}))))

(defn draw-chart [props owner]
  (let [container "responsiveContainer"]
    (reify
      om/IRender
      (render [this]
        (html [:div {:id container}]))
      om/IDidMount
      (did-mount [_]
        (let [chart-data (om/get-state owner :chart-data)]
          (draw (str "#" container) (:margin props) chart-data))))))


