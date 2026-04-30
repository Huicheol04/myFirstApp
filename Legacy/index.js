function goToLogin() {
    window.location.href = 'login.html';
}

function goToSignup() {
    window.location.href = 'signup.html';
}

function handleSignup(event) {
    // 폼 기본 제출 동작(새로고침/페이지 이동) 방지
    event.preventDefault();

    // 입력된 데이터 가져오기
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 비밀번호 확인 로직
    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
        return;
    }

    // LocalStorage에 각각 항목 저장
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // 혹은 전체 데이터를 객체 형태로 저장할 수도 있습니다.
    // const userData = { fullname, email, password };
    // localStorage.setItem('userData', JSON.stringify(userData));

    alert('회원가입이 완료되었습니다! 입력하신 정보가 LocalStorage에 저장되었습니다.');
    
    // 저장 후 로그인 페이지로 이동
    goToLogin();
}

function goToWelcome() {
    window.location.href = 'welcome.html';
}

function handleLogin(event) {
    // 폼 기본 제출 방지
    event.preventDefault();

    // 입력된 이메일과 비밀번호 가져오기
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // LocalStorage에서 가입된 데이터 가져오기
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    // 검증 로직
    if (!savedEmail || !savedPassword) {
        alert('저장된 회원 정보가 없습니다. 회원가입을 먼저 진행해주세요.');
        return;
    }

    if (emailInput === savedEmail && passwordInput === savedPassword) {
        alert('로그인에 성공했습니다!');
        goToWelcome();
    } else {
        alert('이메일 또는 비밀번호가 일치하지 않습니다.');
    }
}
