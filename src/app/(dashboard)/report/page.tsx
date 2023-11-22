"use client"
import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markArea';
import BreadcrumbComponent from '@/components/BreadcrumbComponent';
import BaseTableReport from '@/components/TableComponent/bassTableReport';

type EChartsOption = echarts.EChartsOption;

const EChartsComponent: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    const option: EChartsOption = {
      title: {
        text: 'ผลผลิตไฟฟ้าที่ได้',
        subtext: 'Fake Data',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15',
          '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45',
        ],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} W',
        },
        axisPointer: {
          snap: true,
        },
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [
          { lte: 6, color: 'green' },
          { gt: 6, lte: 8, color: 'red' },
          { gt: 8, lte: 14, color: 'green' },
          { gt: 14, lte: 17, color: 'red' },
          { gt: 17, color: 'green' },
        ],
      },
      series: [
        {
          name: 'Electricity',
          type: 'line',
          smooth: true,
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
          markArea: {
            itemStyle: { color: 'rgba(255, 173, 177, 0.4)' },
            data: [
              [
                { name: 'Morning Peak', xAxis: '07:30' },
                { xAxis: '10:00' },
              ],
              [
                { name: 'Evening Peak', xAxis: '17:30' },
                { xAxis: '21:15' },
              ],
            ],
          },
        },
      ],
    };

    myChart.setOption(option);

    // Clean up when component unmounts
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div className="mx-6 p-4 lg:mx-12">
      <div className="flex flex-col w-full lg:flex-row justify-between items-center mt-10">
        <div className="flex items-center lg:w-auto">
          <h1 className="text-4xl font-bold">รายงาน</h1>
        </div>
      </div>
      <BreadcrumbComponent />
      
      <BaseTableReport classNames="p-4" />

      <div id="main" style={{ width: '100%', height: '400px' }} />;
      
    </div>
  )
};

export default EChartsComponent;