const dateBuilder = (date) => {
  let day = new Intl.DateTimeFormat("en-US-u-ca-persian", {
    day: "numeric",
  }).format(date);

  let month = new Intl.DateTimeFormat("en-US-u-ca-persian", {
    month: "short",
  }).format(date);
  let year = new Intl.DateTimeFormat("en-US-u-ca-persian", {
    year: "numeric",
  }).format(date);
  console.log("till here its ok");
  return `${day}  ${month} ${year.substring(0, 4)} `;
};

const JalaliDate = () => {
  return <div className="date">{dateBuilder(new Date())}</div>;
};

export default JalaliDate;
