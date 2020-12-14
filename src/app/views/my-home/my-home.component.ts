import { Component, OnInit } from '@angular/core';
import {Dynamic} from 'pengesoft-ng-lib';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.less']
})
@Dynamic()
export class MyHomeComponent implements OnInit {
  // 表单一
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['研究院', '财务部', '行政人事部', '数字房产事业部', '建设工程大数据事业部']
    },
    series: [
      {
        name: '部门人数',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          position: 'inner'
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 235, name: '事业部', selected: true},
          {value: 30, name: '人事部'},
          {value: 30, name: '其他'}
        ]
      },
      {
        name: '部门人数',
        type: 'pie',
        radius: ['40%', '55%'],
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
          // shadowBlur:3,
          // shadowOffsetX: 2,
          // shadowOffsetY: 2,
          // shadowColor: '#999',
          // padding: [0, 7],
          rich: {
            a: {
              color: '#999',
              lineHeight: 22,
              align: 'center'
            },
            // abg: {
            //     backgroundColor: '#333',
            //     width: '100%',
            //     align: 'right',
            //     height: 22,
            //     borderRadius: [4, 4, 0, 0]
            // },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0
            },
            b: {
              fontSize: 16,
              lineHeight: 33
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2
            }
          }
        },
        data: [
          {value: 20, name: '研究院'},
          {value: 10, name: '财务部'},
          {value: 10, name: '行政人事部'},
          {value: 135, name: '数字房产事业部'},
          {value: 100, name: '建设工程大数据事业部'},
          {value: 20, name: '其他'}
        ]
      }
    ]
  };

  option2 = {
    title: {
      text: '部门年度变动表'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['建设工程大数据事业部', '数字房产事业部', '行政人事部', '财务部', '财务部']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2020.1', '2020.3', '2020.5', '2020.7', '2020.9', '2020.11', '2020.12']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '建设工程大数据事业部',
        type: 'line',
        stack: '人数',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '数字房产事业部',
        type: 'line',
        stack: '人数',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '行政人事部',
        type: 'line',
        stack: '人数',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '财务部',
        type: 'line',
        stack: '人数',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '财务部',
        type: 'line',
        stack: '人数',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
