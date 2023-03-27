import { useRef, useState } from "react";

import { add, format, sub, differenceInHours } from "date-fns";
import addWeeks from "date-fns/addWeeks"; // addWeeks가 필요하면 이부분만 가져올 수 있음
import ko from "date-fns/locale/ko"; // locale 설정을 위해 받아옴
import { format as timezoneFormat, toDate } from "date-fns-tz"; // format이라는 이름을 위에서 사용하고 있기 때문에 timezoneFormat이라는 이름으로 사용한다.

export default function DatefnsExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBrithDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(format(new Date(event.target.value), "eeee", { locale: ko }));
  };
  const dateFnsDate = new Date();
  const newDateFnsDateDate = add(dateFnsDate, { weeks: 1 });
  const newDateFnsDateDate2 = addWeeks(newDateFnsDateDate, 1);
  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDateDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDateDate2, "yyyy-MM-dd")}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      {/* <div>{dayjs.tz.guess()}</div> */}
      <div>
        2018년 3월 10일 13시에 하루 더하기:
        {timezoneFormat(
          add(new Date("2018-03-10 13:00:00"), { days: 1 }),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_York" }
        )}
      </div>
      <div>
        2018년 3월 10일 13시에 24시간 더하기:
        {timezoneFormat(
          add(
            toDate(new Date("2018-03-10 13:00:00"), {
              timeZone: "America/New_York",
            }),
            { hours: 24 }
          ),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_York" }
        )}
      </div>
      <br />
      <div>Leap year (Korea)</div>
      <div>
        2017년 1월 1일에 1년 뺴기:
        {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
      </div>
      <div>
        2017년 1월 1일에 365일 뺴기:
        {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
      </div>
      <br />
      <div>한국어로 표기(07-17-2021을 2021년 7월 17일로 표기)</div>
      <div>{format(new Date("07-17-2021"), "yyyy년 MM월 dd일")}</div>
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
        {`${differenceInHours(
          new Date("2021-07-17 03:00"),
          new Date("2021-07-18 02:00")
        )}시간`}
      </div>
    </div>
  );
}
