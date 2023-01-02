const getCars = async () => {
    const res = await fetch("https://app.gosmart.mn/open/api/GetExamResult");
    const data = await res.json();
    console.log(data);
    return data;
  };