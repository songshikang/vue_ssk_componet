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
            fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById('container');
    const width = container.scrollWidth;
    const height = container.scrollHeight || 500;
    const graph = new G6.TreeGraph({
      container: 'container',
      width,
      height,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
                console.log('7777777', item, collapsed);
              const data = item.get('model');
              data.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: 'cubic-horizontal',
      },
      layout: {
        type: 'dendrogram',
        direction: 'LR', // H / V / LR / RL / TB / BT
        nodeSep: 160,
        rankSep: 260,
      },
    });

    graph.node(function (node) {
        console.log('node=====', node);
      return {
        label: node.id,
        labelCfg: {
          position: node.children && node.children.length > 0 ? 'left' : 'right',
          offset: 5,
        },
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();

    if (typeof window !== 'undefined')
      window.onresize = () => {
        if (!graph || graph.get('destroyed')) return;
        if (!container || !container.scrollWidth || !container.scrollHeight) return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };
  });
        }
    }
}
</script>

