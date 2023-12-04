const func = async () => {
    const data = await fetch("https://xn--d1ailn.xn--p1ai/api2.php?login=bXJkZW4wODJAZ21haWwuY29t&password=RmFnZ290Zm94MjI=&app=112233&type=auth")
      .then((res) => res.json())
      .then((data) => data);
    console.log(data);
    document.body.innerHTML = `<h1>${data.title}</h1><p></p>`;
  }
  
  func();
