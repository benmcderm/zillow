function makeAsyncCall(address, cityState) {
  const PROXY_URL = 'http://www.zillow.com/webservice/GetSearchResults.htm';
  const ZWSID = 'YOUR ZILLOW ID HERE';
  const updatedAddress = address.split(' ').join('+');
  const updatedCityState = cityState.split(', ').join('+');
  const url = `${PROXY_URL}?zws-id=${ZWSID}&address=${updatedAddress}&citystatezip=${updatedCityState}`;
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const re = /zestimate><amount currency="USD">(\d+)<\/amount>/;
      console.log(xhr.responseText.match(re)[1]);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

makeAsyncCall('2720 Fremont Ave S','Minneapolis, MN');
