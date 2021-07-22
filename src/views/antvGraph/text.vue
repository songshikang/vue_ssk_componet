<template>
  <!-- <div>3333333</div> -->
  
  <div class="box" id="container"></div>
</template>
<script>
import G6 from "@antv/g6";
export default {
    data () {
        return {
            
        }
    },
    mounted () {
      this.init();  
    },
    methods: {
        init() {
            const data = {
  nodes: [
    {
      id: 'node5',
      x: 150,
      y: 200,
      label: '业务条线',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    {
      id: 'node6',
      x: 300,
      y: 150,
      label: '机构级',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    {
      id: 'node7',
      x: 300,
      y: 250,
      label: '产品级',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    {
      id: 'node8',
      x: 300,
      y: 350,
      label: '自定义级',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    {
      id: 'rect1',
      label: 'rect1',
      description: 'description, hidden when undefined',
      type: 'modelRect',
      x: 400,
      y: 250,
    },
  ],
  edges: [
    {
      source: 'node5',
      target: 'node6',
      type: 'cubic-horizontal',
    },
    {
      source: 'node5',
      target: 'node7',
      type: 'cubic-horizontal',
    },
    {
      source: 'node5',
      target: 'node8',
      type: 'cubic-horizontal',
    },
    {
      source: 'node7',
      target: 'rect1',
      type: 'cubic-horizontal',
    },
  ],
};


const width = document.getElementById('container').scrollWidth;
const height = document.getElementById('container').scrollHeight || 500;
console.log('数据长度的值', width, height);
const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        modes: {
            default: ['drag-canvas', 'drag-node'],
        },
        defaultNode: {
            /* node type */
            type: 'circle',
            /* node size */
            size: [60],
            /* style for the keyShape */
            // style: {
            //   fill: '#9EC9FF',
            //   stroke: '#5B8FF9',
            //   lineWidth: 3,
            // },
            labelCfg: {
            /* label's position, options: center, top, bottom, left, right */
            position: 'center',
            /* label's offset to the keyShape, 4 by default */
            //   offset: 12,
            /* label's style */
            //   style: {
            //     fontSize: 20,
            //     fill: '#ccc',
            //     fontWeight: 500
            //   }
            },
            /* configurations for four linkpoints */
            linkPoints: {
            // top: true,
            // right: true,
            // bottom: true,
            // left: true,
            /* linkPoints' size, 8 by default */
            //   size: 5,
            /* linkPoints' style */
            //   fill: '#ccc',
            //   stroke: '#333',
            //   lineWidth: 2,
            },
            /* icon configuration */
            icon: {
            /* whether show the icon, false by default */
            // show: true,
            /* icon's img address, string type */
            // img: 'https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg',
            /* icon's size, 20 * 20 by default: */
            //   width: 40,
            //   height: 40
            },
        },
        /* styles for different states, there are built-in styles for states: active, inactive, selected, highlight, disable */
        // nodeStateStyles: {
        //   // node style of active state
        //   active: {
        //     fillOpacity: 0.8,
        //   },
        //   // node style of selected state
        //   selected: {
        //     lineWidth: 5,
        //   },
        // },
        });

        graph.data(data);
        graph.render();

        graph.on('node:mouseenter', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', true);
        });

        graph.on('node:mouseleave', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'active', false);
        });

        graph.on('node:click', (evt) => {
        const { item } = evt;
        graph.setItemState(item, 'selected', true);
        });
        graph.on('canvas:click', (evt) => {
        graph.getNodes().forEach((node) => {
            graph.clearItemStates(node);
        });
        });
        }
    }
}
</script>