# WHen to use axios interceptors?

요청을 서버로 전송하기 전, 

## Request Interceptors

1. API 로그 전송

## Response Interceptors

1. 401 응답이 전송될 경우 Auth 화면으로 리디렉션

```javascript
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        swal({
            title: "Session Expired",
            text: "Your session has expired. Would you like to be redirected to the login page?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes",
            closeOnConfirm: false
        }, function(){
            window.location = '/login';
        });
    } else {
        return Promise.reject(error);
    }
});
```
