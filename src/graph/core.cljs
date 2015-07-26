(ns ^:figwheel-always graph.core
    (:require[om.core :as om :include-macros true]
              [sablono.core :as html :refer-macros [html]]
              [graph.chart :as chart]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(def transitionDuration 2000)
(def margin {:top 20 :right 20 :bottom 30 :left 40})
(def width (-> 1000
               (- (:left margin))
               (- (:right margin))))
(def height (-> 500
                (- (:top margin))
                (- (:bottom margin))))

(defn- generate-data [rows]
  (map #(hash-map :Id % :Value (rand-int 20)) (take rows (range))))

(defonce app-state (atom {:margin margin
                          :transitionDuration transitionDuration}))

(om/root
  (fn [data owner]
    (reify
      om/IInitState
      (init-state [this]
        {:chart-data (generate-data 20)})
      om/IRenderState
      (render-state [this state]
        (om/build chart/draw-chart
                        data
                        {:state state}))))
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

