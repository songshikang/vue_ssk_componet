<template>
  <div>
    <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
    <AntvGraph></AntvGraph>
  </div>
</template>

<script>
import AntvGraph from '@/views/dropdrog';
// import AntvGraph from '@/views/antvGraph';
// import AntvGraph from '@/views/antvGraph/circle';
// import AntvGraph from '@/views/antvGraph/text';
export default {
  components: {
    AntvGraph
  },
  data() {
    return {
    };
  },
  mounted () {
    this.init();
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    init() {
      const temp = [
        {
          'id': 1,
          'name': '1级1',
          'parentId': 0
        },
        {
          'id': 2,
          'name': '2级1',
          'parentId': 0
        },
        {
          'id': 4,
          'name': '1级1-1',
          'parentId': 1
        },
        {
          'id': 6,
          'name': '1级1-1-1',
          'parentId': 4
        },
        {
          'id': 12,
          'name': '2级1-1',
          'parentId': 2
        },
        {
          'id': 13,
          'name': '3级1',
          'parentId': 0
        },
        {
          'id': 14,
          'name': '3级1-1',
          'parentId': 13
        },
        {
          'id': 15,
          'name': '1级1-1-1-1',
          'parentId': 6
        }
      ]
      this.generateOptions(temp);
    },
    // 开始递归方法
	generateOptions(params) {
      var result = []
      for (const param of params) {
        if (param.parentId === 0) {  // 判断是否为顶层节点
          var parent = {
            'id': param.id,
            'label': param.name
          }
          parent.children = this.getchilds(param.id, params)  // 获取子节点
          result.push(parent)
        }
      }
      return result
    },

    getchilds(id, array) {
      
      const childs = []
      for (const arr of array) {  // 循环获取子节点
        if (id === arr.parentId) {
          childs.push({
            'id': arr.id,
            'label': arr.name
          })
        }
      }

      for (const child of childs) { // 获取子节点的子节点
        const childscopy = this.getchilds(child.id, array)// 递归获取子节点
        if (childscopy.length > 0) {
          child.children = childscopy
        }
      }

      return childs
    }
  }
};
</script>
<style>
.el-tree {
  display: flex;
}
.el-tree-node__children {
  display: flex;
}
</style>


