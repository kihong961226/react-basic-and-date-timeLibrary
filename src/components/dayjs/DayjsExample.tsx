import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useRef, useState } from "react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// 한국 설정을 하겠다. (위에서 import도 해야함.)
dayjs.locale("ko");
// 타임존 적용(utc, timezone import 필요)
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayjsExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBrithDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(dayjs(event?.target.value, "YYYY-MM-DD").format("dddd"));
  };
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.add(1, "week");
  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjsDate.format()}
        <br />
        {cloneNewDayjsDate.format()}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>{dayjs.tz.guess()}</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {dayjs
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기:
        {dayjs
          .tz("2018-03-10 13:00:00", "America/New_York")
          .add(24, "hour")
          .format()}
      </div>
      <br />
      <div>Leap year (Korea)</div>
      <div>
        2017년 1월 1일에 1년 뺴기:
        {dayjs("2017-01-01").subtract(1, "year").format()}
      </div>
      <div>
        2017년 1월 1일에 365일 뺴기:
        {dayjs("2017-01-01").subtract(365, "day").format()}
      </div>
      <br />
      <div>한국어로 표기(07-17-2021을 2021년 7월 17일로 표기)</div>
      <div>{dayjs("07-17-2021").format("YYYY년 M월 D일")}</div>
      <br />
      <div>자기 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBrithDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
      <div>
        {`${dayjs("2021-07-17 03:00").diff(
          dayjs("2021-07-18 02:00"),
          "hours"
        )}시간`}
      </div>
    </div>
  );
}
