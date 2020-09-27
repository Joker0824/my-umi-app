import React, {
  useState,
  CSSProperties,
  memo,
  useEffect,
  useImperativeHandle,
} from 'react';
import { Tabs, Button, Row, Col } from 'antd';
import styles from './style.less';
import SecondPane from './SecondPane';
import MinutePane from './MinutePane';
import HourPane from './HourPane';
import DayPane from './DayPane';
import MonthPane from './MonthPane';
import WeekPane from './WeekPane';
import YearPane from './YearPanel';
import {
  secondRegex,
  minuteRegex,
  hourRegex,
  dayRegex,
  monthRegex,
  weekRegex,
  yearRegex,
} from './cron-regex';
import { useWhyDidYouUpdate, useMount } from 'ahooks';

const { TabPane } = Tabs;
interface CronProp {
  value: string;
  style?: CSSProperties;
}
const Cron = React.forwardRef<{}, CronProp>((props, ref) => {
  const { value, style } = props;
  const [currentTab, setCurrentTab] = useState('1');
  const [second, setSecond] = useState('*');
  const [minute, setMinute] = useState('*');
  const [hour, setHour] = useState('*');
  const [day, setDay] = useState('*');
  const [month, setMonth] = useState('*');
  const [week, setWeek] = useState('?');
  const [year, setYear] = useState('*');
  useImperativeHandle(ref, () => ({
    generate,
  }));
  /**
   * @description 把cron转换成界面UI
   */
  const onParse = () => {
    if (value) {
      try {
        let [
          secondVal,
          minuteValue,
          hourVal,
          dayVal,
          monthVal,
          weekVal,
          yearVal,
        ] = value.split(' ');
        secondVal = secondRegex.test(secondVal) ? secondVal : '*';
        minuteValue = minuteRegex.test(minuteValue) ? minuteValue : '*';
        hourVal = hourRegex.test(hourVal) ? hourVal : '*';
        dayVal = dayRegex.test(dayVal) ? dayVal : '*';
        monthVal = monthRegex.test(monthVal) ? monthVal : '*';
        weekVal = weekRegex.test(weekVal) ? weekVal : '?';
        weekVal = dayVal !== '?' ? '?' : weekVal;
        yearVal = yearRegex.test(yearVal) ? yearVal : '*';
        setSecond(secondVal);
        setMinute(minuteValue);
        setHour(hourVal);
        setDay(dayVal);
        setMonth(monthVal);
        setWeek(weekVal);
        setYear(yearVal);
      } catch (error) {
        setSecond('*');
        setMinute('*');
        setHour('*');
        setDay('*');
        setMonth('*');
        setWeek('?');
        setYear('*');
      }
    }
  };

  /**
   * @description 从UI界面生成cron
   */
  const generate = (): string => {
    return [second, minute, hour, day, month, week, year].join(' ');
  };

  const onChangeDay = (v: any) => {
    setDay(v);
    if (v !== '?') {
      setWeek('?');
    }
  };

  const onChangeWeek = (v: any) => {
    setWeek(v);
    if (v !== '?') {
      setDay('?');
    }
  };
  useEffect(() => {
    onParse();
  }, []);

  return (
    <div className={styles.cron} style={style}>
      <Tabs
        className={styles.tabs}
        activeKey={currentTab}
        onChange={setCurrentTab}
      >
        <TabPane tab="&nbsp;&nbsp;&nbsp;秒&nbsp;&nbsp;&nbsp;" key="1">
          <SecondPane value={second} onChange={setSecond} />
        </TabPane>
        <TabPane tab="&nbsp;&nbsp;&nbsp;分&nbsp;&nbsp;&nbsp;" key="2">
          <MinutePane value={minute} onChange={setMinute} />
        </TabPane>
        <TabPane tab="&nbsp;&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;" key="3">
          <HourPane value={hour} onChange={setHour} />
        </TabPane>
        <TabPane tab="&nbsp;&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;" key="4">
          <DayPane value={day} onChange={onChangeDay} />
        </TabPane>
        <TabPane tab="&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;" key="5">
          <MonthPane value={month} onChange={setMonth} />
        </TabPane>
        <TabPane tab="&nbsp;&nbsp;&nbsp;周&nbsp;&nbsp;&nbsp;" key="6">
          <WeekPane value={week} onChange={onChangeWeek} />
        </TabPane>
        <TabPane tab="&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;" key="7">
          <YearPane value={year} onChange={setYear} />
        </TabPane>
      </Tabs>
      {/* <div className={styles.footer}>
        <Button style={{ marginRight: 10 }} onClick={onParse}>
          解析到UI
        </Button>
        <Button type="primary" onClick={onGenerate}>
          生成
        </Button>
      </div> */}
    </div>
  );
});

export default memo(Cron);
