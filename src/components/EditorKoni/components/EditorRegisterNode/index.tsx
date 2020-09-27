import React from 'react';
import { RegisterNode } from 'gg-editor';
import Var from '@/icons/assets/var.svg';
import start from '@/icons/assets/start.svg';
import http from '@/icons/assets/request.svg';
import sql from '@/icons/assets/sql.svg';
import fun from '@/icons/assets/fun.svg';
import end from '@/icons/assets/end.svg';
import browser_http from '@/icons/assets/browser_http.svg';
import result from '@/icons/assets/result.svg';

export default () => {
  return (
    <>
      <RegisterNode
        name="result"
        config={{
          draw(item: any) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const width = 60;
            const height = 80;
            const x = -width / 2;
            const y = -height / 2;
            const imageWidth = 40;
            const imageHeight = 40;

            const keyShape = group.addShape('rect', {
              attrs: {
                x: -width / 2,
                y: -height / 2,
                width,
                height,
                fill: '#fafafa',
                stroke: '#fdad5e',
              },
            });
            // 类型 logo
            group.addShape('image', {
              attrs: {
                img: result,
                x: -20,
                y: -30,
                width: imageWidth,
                height: imageHeight,
              },
            });
            // 名称文本
            const label = model.label ? model.label : this.label;
            group.addShape('text', {
              attrs: {
                text: label,
                x: 0,
                y: 30,
                textAlign: 'center',
                textBaseline: 'bottom',
                fill: 'rgba(0,0,0,0.65)',
              },
            });
            return keyShape;
          },
          // 获取样式
          getStyle(item: any) {
            return {
              fill: '#fafafa',
            };
          },
          // 激活样式
          getActivedStyle(item: any) {
            return {
              stroke: '#bbb',
              fill: '#fafafa',
            };
          },
          // 选中样式
          getSelectedStyle(item: any) {
            return {
              stroke: '#999',
              fill: '#fafafa',
            };
          },
          // 设置锚点
          anchor: [
            [0.5, 0], // 上面边的中点
            [0.5, 1], // 下边边的中点
            [0, 0.5],
            [1, 0.5],
          ],
        }}
      />
      <RegisterNode
        name="browser_http"
        config={{
          draw(item: any) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const width = 60;
            const height = 80;
            const x = -width / 2;
            const y = -height / 2;
            const imageWidth = 40;
            const imageHeight = 40;

            const keyShape = group.addShape('rect', {
              attrs: {
                x: -width / 2,
                y: -height / 2,
                width,
                height,
                fill: '#fafafa',
                stroke: '#fdad5e',
              },
            });
            // 类型 logo
            group.addShape('image', {
              attrs: {
                img: browser_http,
                x: -20,
                y: -30,
                width: imageWidth,
                height: imageHeight,
              },
            });
            // // 名称文本
            const label = model.label ? model.label : this.label;
            group.addShape('text', {
              attrs: {
                text: label,
                x: 0,
                y: 30,
                textAlign: 'center',
                textBaseline: 'bottom',
                fill: 'rgba(0,0,0,0.65)',
              },
            });
            return keyShape;
          },
          // 获取样式
          getStyle(item: any) {
            return {
              fill: '#fafafa',
            };
          },
          // 激活样式
          getActivedStyle(item: any) {
            return {
              stroke: '#bbb',
              fill: '#fafafa',
            };
          },
          // 选中样式
          getSelectedStyle(item: any) {
            return {
              stroke: '#999',
              fill: '#fafafa',
            };
          },
          // 设置锚点
          anchor: [
            [0.5, 0], // 上面边的中点
            [0.5, 1], // 下边边的中点
            [0, 0.5],
            [1, 0.5],
          ],
        }}
      />
      <RegisterNode
        name="fun"
        config={{
          draw(item: any) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const width = 60;
            const height = 80;
            const x = -width / 2;
            const y = -height / 2;
            const imageWidth = 40;
            const imageHeight = 40;

            const keyShape = group.addShape('rect', {
              attrs: {
                x: -width / 2,
                y: -height / 2,
                width,
                height,
                fill: '#fafafa',
                stroke: '#fdad5e',
              },
            });
            // 类型 logo
            group.addShape('image', {
              attrs: {
                img: fun,
                x: -20,
                y: -30,
                width: imageWidth,
                height: imageHeight,
              },
            });
            // // 名称文本
            const label = model.label ? model.label : this.label;
            group.addShape('text', {
              attrs: {
                text: label,
                x: 0,
                y: 30,
                textAlign: 'center',
                textBaseline: 'bottom',
                fill: 'rgba(0,0,0,0.65)',
              },
            });
            return keyShape;
          },
          // 获取样式
          getStyle(item: any) {
            return {
              fill: '#fafafa',
            };
          },
          // 激活样式
          getActivedStyle(item: any) {
            return {
              stroke: '#bbb',
              fill: '#fafafa',
            };
          },
          // 选中样式
          getSelectedStyle(item: any) {
            return {
              stroke: '#999',
              fill: '#fafafa',
            };
          },
          // 设置锚点
          anchor: [
            [0.5, 0], // 上面边的中点
            [0.5, 1], // 下边边的中点
            [0, 0.5],
            [1, 0.5],
          ],
        }}
      />
      <RegisterNode
        name="sql"
        config={{
          draw(item: any) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const width = 60;
            const height = 80;
            const x = -width / 2;
            const y = -height / 2;
            const imageWidth = 40;
            const imageHeight = 40;

            const keyShape = group.addShape('rect', {
              attrs: {
                x: -width / 2,
                y: -height / 2,
                width,
                height,
                fill: '#fafafa',
                stroke: '#fdad5e',
              },
            });
            // 类型 logo
            group.addShape('image', {
              attrs: {
                img: sql,
                x: -20,
                y: -30,
                width: imageWidth,
                height: imageHeight,
              },
            });
            // // 名称文本
            const label = model.label ? model.label : this.label;
            group.addShape('text', {
              attrs: {
                text: label,
                x: 0,
                y: 30,
                textAlign: 'center',
                textBaseline: 'bottom',
                fill: 'rgba(0,0,0,0.65)',
              },
            });
            return keyShape;
          },
          // 获取样式
          getStyle(item: any) {
            return {
              fill: '#fafafa',
            };
          },
          // 激活样式
          getActivedStyle(item: any) {
            return {
              stroke: '#bbb',
              fill: '#fafafa',
            };
          },
          // 选中样式
          getSelectedStyle(item: any) {
            return {
              stroke: '#999',
              fill: '#fafafa',
            };
          },
          // 设置锚点
          anchor: [
            [0.5, 0], // 上面边的中点
            [0.5, 1], // 下边边的中点
            [0, 0.5],
            [1, 0.5],
          ],
        }}
      />
      <RegisterNode
        name="end"
        config={{
          draw(item: any) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const width = 60;
            const height = 80;
            const x = -width / 2;
            const y = -height / 2;
            const imageWidth = 40;
            const imageHeight = 40;

            const keyShape = group.addShape('rect', {
              attrs: {
                x: -width / 2,
                y: -height / 2,
                width,
                height,
                fill: '#fafafa',
                stroke: '#fdad5e',
              },
            });
            // 类型 logo
            group.addShape('image', {
              attrs: {
                img: end,
                x: -20,
                y: -30,
                width: imageWidth,
                height: imageHeight,
              },
            });
            // // 名称文本
            const label = model.label ? model.label : this.label;
            group.addShape('text', {
              attrs: {
                text: label,
                x: 0,
                y: 30,
                textAlign: 'center',
                textBaseline: 'bottom',
                fill: 'rgba(0,0,0,0.65)',
              },
            });
            return keyShape;
          },
          // 获取样式
          getStyle(item: any) {
            return {
              fill: '#fafafa',
            };
          },
          // 激活样式
          getActivedStyle(item: any) {
            return {
              stroke: '#bbb',
              fill: '#fafafa',
            };
          },
          // 选中样式
          getSelectedStyle(item: any) {
            return {
              stroke: '#999',
              fill: '#fafafa',
            };
          },
          // 设置锚点
          anchor: [
            [0.5, 0], // 上面边的中点
            [0.5, 1], // 下边边的中点
            [0, 0.5],
            [1, 0.5],
          ],
        }}
      />
      <RegisterNode
        name="http"
        config={{
          draw(item: any) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const width = 60;
            const height = 80;
            const x = -width / 2;
            const y = -height / 2;
            const imageWidth = 40;
            const imageHeight = 40;

            const keyShape = group.addShape('rect', {
              attrs: {
                x: -width / 2,
                y: -height / 2,
                width,
                height,
                fill: '#fafafa',
                stroke: '#fdad5e',
              },
            });
            // 类型 logo
            group.addShape('image', {
              attrs: {
                img: http,
                x: -20,
                y: -30,
                width: imageWidth,
                height: imageHeight,
              },
            });
            // // 名称文本
            const label = model.label ? model.label : this.label;
            group.addShape('text', {
              attrs: {
                text: label,
                x: 0,
                y: 30,
                textAlign: 'center',
                textBaseline: 'bottom',
                fill: 'rgba(0,0,0,0.65)',
              },
            });
            return keyShape;
          },
          // 获取样式
          getStyle(item: any) {
            return {
              fill: '#fafafa',
            };
          },
          // 激活样式
          getActivedStyle(item: any) {
            return {
              stroke: '#bbb',
              fill: '#fafafa',
            };
          },
          // 选中样式
          getSelectedStyle(item: any) {
            return {
              stroke: '#999',
              fill: '#fafafa',
            };
          },
          // 设置锚点
          anchor: [
            [0.5, 0], // 上面边的中点
            [0.5, 1], // 下边边的中点
            [0, 0.5],
            [1, 0.5],
          ],
        }}
      />
      <RegisterNode
        name="start"
        config={{
          draw(item: any) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const width = 60;
            const height = 80;
            const x = -width / 2;
            const y = -height / 2;
            const imageWidth = 40;
            const imageHeight = 40;

            const keyShape = group.addShape('rect', {
              attrs: {
                x: -width / 2,
                y: -height / 2,
                width,
                height,
                fill: '#fafafa',
                stroke: '#fdad5e',
              },
            });
            // 类型 logo
            group.addShape('image', {
              attrs: {
                img: start,
                x: -20,
                y: -30,
                width: imageWidth,
                height: imageHeight,
              },
            });
            // // 名称文本
            const label = model.label ? model.label : this.label;
            group.addShape('text', {
              attrs: {
                text: label,
                x: 0,
                y: 30,
                textAlign: 'center',
                textBaseline: 'bottom',
                fill: 'rgba(0,0,0,0.65)',
              },
            });
            return keyShape;
          },
          // 获取样式
          getStyle(item: any) {
            return {
              fill: '#fafafa',
            };
          },
          // 激活样式
          getActivedStyle(item: any) {
            return {
              stroke: '#bbb',
              fill: '#fafafa',
            };
          },
          // 选中样式
          getSelectedStyle(item: any) {
            return {
              stroke: '#999',
              fill: '#fafafa',
            };
          },
          // 设置锚点
          anchor: [
            [0.5, 0], // 上面边的中点
            [0.5, 1], // 下边边的中点
            [0, 0.5],
            [1, 0.5],
          ],
        }}
      />

      <RegisterNode
        name="var"
        config={{
          draw(item: any) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const width = 60;
            const height = 80;
            const imageWidth = 40;
            const imageHeight = 40;

            const keyShape = group.addShape('rect', {
              attrs: {
                x: -width / 2,
                y: -height / 2,
                width,
                height,
                fill: '#fafafa',
                stroke: '#fdad5e',
              },
            });
            // 类型 logo
            group.addShape('image', {
              attrs: {
                img: Var,
                x: -20,
                y: -30,
                width: imageWidth,
                height: imageHeight,
              },
            });
            // // 名称文本
            const label = model.label ? model.label : this.label;
            group.addShape('text', {
              attrs: {
                text: label,
                x: 0,
                y: 30,
                textAlign: 'center',
                textBaseline: 'bottom',
                fill: 'rgba(0,0,0,0.65)',
              },
            });
            return keyShape;
          },
          // 获取样式
          getStyle(item: any) {
            return {
              fill: '#fafafa',
            };
          },
          // 激活样式
          getActivedStyle(item: any) {
            return {
              stroke: '#bbb',
              fill: '#fafafa',
            };
          },
          // 选中样式
          getSelectedStyle(item: any) {
            return {
              stroke: '#999',
              fill: '#fafafa',
            };
          },
          // 设置锚点
          anchor: [
            [0.5, 0], // 上面边的中点
            [0.5, 1], // 下边边的中点
            [0, 0.5],
            [1, 0.5],
          ],
        }}
      />
    </>
  );
};
