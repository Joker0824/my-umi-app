import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Radio, InputNumber, Checkbox, Col, Row, Card } from 'antd';
import style from './style.less';
import _ from 'lodash';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
interface MyComProp {
  value: string;
  onChange: (value: string) => void;
}

const MyCom: React.FC<MyComProp> = ({ value, onChange }) => {
  const [currentRadio, setCurrentRadio] = useState(1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(10);
  const [offsetFrom, setOffsetFrom] = useState(0);
  const [offset, setOffset] = useState(1);
  const [selected, setSelected] = useState(['0']);
  const checkList = useMemo(() => {
    const disabled = currentRadio !== 4;
    const checks = [];
    for (let i = 0; i < 60; i++) {
      checks.push(
        <Col key={i} span={4}>
          <Checkbox disabled={disabled} value={i.toString()}>
            {i}
          </Checkbox>
        </Col>,
      );
    }
    return checks;
  }, [currentRadio, selected]);

  const onChangeRadio = useCallback(e => {
    setCurrentRadio(e.target.value);
  }, []);

  const onChangeFrom = useCallback(v => {
    setFrom(v || 0);
  }, []);

  const onChangeTo = useCallback(v => {
    setTo(v || 0);
  }, []);

  const onChangeOffsetFrom = useCallback(v => {
    setOffsetFrom(v || 0);
  }, []);

  const onChangeOffset = useCallback(v => {
    setOffset(v || 0);
  }, []);

  const onChangeSelected = useCallback(v => {
    setSelected(v.length !== 0 ? v : ['0']);
  }, []);

  useEffect(() => {
    if (value === '*') {
      setCurrentRadio(1);
    } else if (value.indexOf('-') > -1) {
      setCurrentRadio(2);
      const [defaultFrom, defaultTo] = value.split('-');
      setFrom(parseInt(defaultFrom, 10));
      setTo(parseInt(defaultTo, 10));
    } else if (value.indexOf('/') > -1) {
      setCurrentRadio(3);
      const [defaultOffsetFrom, defaultOffset] = value.split('/');
      setOffsetFrom(parseInt(defaultOffsetFrom, 10));
      setOffset(parseInt(defaultOffset, 10));
    } else {
      setCurrentRadio(4);
      setSelected(value ? value.split(',') : ['0']);
    }
  }, []);

  useEffect(() => {
    switch (currentRadio) {
      case 1:
        onChange('*');
        break;
      case 2:
        onChange(`${from}-${to}`);
        break;
      case 3:
        onChange(`${offsetFrom}/${offset}`);
        break;
      case 4:
        onChange(selected.join(','));
        break;
      default:
        break;
    }
  }, [currentRadio, from, to, offsetFrom, offset, selected]);

  return (
    <Card>
      <p>value:{value}</p>
      <RadioGroup
        name="radiogroup"
        value={currentRadio}
        onChange={onChangeRadio}
      >
        <Radio value={1} className={style.antRadioWrapper}>
          每一分钟
        </Radio>
        <Radio value={2} className={style.antRadioWrapper}>
          从&nbsp;
          <InputNumber
            disabled={currentRadio !== 2}
            min={0}
            max={59}
            value={from}
            size="small"
            style={{ width: 100 }}
          />
          &nbsp;-&nbsp;
          <InputNumber
            disabled={currentRadio !== 2}
            min={0}
            max={59}
            value={to}
            size="small"
            onChange={onChangeTo}
            style={{ width: 100 }}
          />
          &nbsp;分，每分执行一次
        </Radio>
        <Radio value={3} className={style.antRadioWrapper}>
          从&nbsp;
          <InputNumber
            disabled={currentRadio !== 3}
            min={0}
            max={59}
            value={offsetFrom}
            size="small"
            onChange={onChangeOffsetFrom}
            style={{ width: 100 }}
          />
          &nbsp;分开始， 每&nbsp;
          <InputNumber
            disabled={currentRadio !== 3}
            min={0}
            max={59}
            value={offset}
            size="small"
            onChange={onChangeOffset}
            style={{ width: 100 }}
          />
          &nbsp;分执行一次
        </Radio>
        <Radio value={4} className={style.antRadioWrapper}>
          指定
        </Radio>
        <CheckboxGroup
          style={{ width: '100%' }}
          value={selected}
          onChange={onChangeSelected}
        >
          {_.chunk(checkList, 6).map((row, index) => (
            <Row key={index}>{row}</Row>
          ))}
        </CheckboxGroup>
      </RadioGroup>
    </Card>
  );
};

export default MyCom;
