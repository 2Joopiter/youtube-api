const api_key = 'AIzaSyBCqSk4zIkhEpjHpiWBU8U5ZbT7HiSItqc';
const playlist_id = 'PL7mCE55Wm-djdbvuzIWO64d3eCVtnYPa0';
const base_url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const result_url = `${base_url}?part=snippet&api_key=${api_key}&playlistId=${playlist_id}maxResults=6;`;

/*
  브라우저 URL을 통해서 데이터를 요청하는 방식을 GET 방식이라고 함
  요청 URL : 기본 url?name=value(옵션값)&name=value
  QueryString: 기본 요청 URL 뒤에 ? 뒤쪽으로 name=value 형태로 옵션을 담아서 전달하는 방식. 여러개면 &로 구분
*/
