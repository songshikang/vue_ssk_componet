<template>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        v-for="item in Data"
        :key="item"
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>
      
      <!-- <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                <div slot="content"> 
                    {{ scope.row.address }}
                    <div>更多</div>
                </div>
            <div style="width:150px">
                <span>{{ toslice(scope.row.address, 18) }}</span>
                <span style="float: right;color:#f0f;cursor:auto" >标签</span>
            </div>
            </el-tooltip>
        </template>
      </el-table-column> -->
    </el-table>
  </template>

  <script>
    export default {
      name: 'dropdrog',
      data() {
        return {
          Data: [{
            prop: 'date',
            label: '日期',

          },
          {
            prop: 'date',
            label: '地址',

          },{
            prop: 'date',
            label: '地址222',

          }],
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1517 '
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市 '
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1517 '
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      mounted () {
        window.vue = this;
      },
      methods: {
          toslice(string, num) {
             let ren = string.slice(0, num);
             return ren + '...';
          }
      }
    }
  </script>