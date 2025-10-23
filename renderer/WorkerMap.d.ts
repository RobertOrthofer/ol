export default WorkerMapRenderer;
/**
 * @classdesc
 * Worker map renderer.
 * @api
 */
declare class WorkerMapRenderer extends MapRenderer {
    /**
     * @private
     * @type {import("../events.js").EventsKey}
     */
    private fontChangeListenerKey_;
    /**
     * mocked HTMLDivElement for use in worker
     * @private
     * @type {*}
     */
    private element_;
    /**
     * @private
     * @type {Array<HTMLElement>}
     */
    private children_;
    /**
     * @private
     * @type {boolean}
     */
    private renderedVisible_;
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {Array<import('../layer/Layer.js').State>} layerStates Layers.
     */
    declutter(frameState: import("../Map.js").FrameState, layerStates: Array<import("../layer/Layer.js").State>): void;
}
import MapRenderer from './Map.js';
//# sourceMappingURL=WorkerMap.d.ts.map