const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChars = ['%', '*', '/', '-', '+', '=']; // 특수문자를 저장하는 배열을 정의
let output = ''; // 입력값이나 결과를 저장 초기값은 빈 문자열

const calculate = btnValue => {
    // btnValue 가 = 이고 output 이 비어있지 않은 상태에만 실행
    // AND 연산자 : 두가지 모두 참 일때
    if (btnValue === '=' && output !== '') {
        output = eval(output.replace('%', '/100')); // output 문자열에서 % 문자를 찾아 /100 으로 교체
    }

    // AC 버튼을 누르면 output 을 초기화
    else if (btnValue === 'AC') {
        output = '';
    }

    // DEL 버튼을 누르면 output 문자열에 마지막 문자를 제거
    else if (btnValue === 'DEL') {
        output = output.slice(0, -1); // 0 은 문자열의 첫번째 문자, 1 은 문자열의 마지막 문자
    }

    // 버튼을 누르면 output 에 btnValue 를 추가
    // 하지만 output 이 비어 있고 btnValue 가 specialChars 배열에 속하는 연산자인 경우 추가하지 않음
    else {
        if (output === '' && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    // display value 에 계산 결과 표시
    display.value = output;
};

// buttons 배열의 각 요소에 대해 반복 작업을 수행
buttons.forEach(button => {
    // button 에 클릭 이벤트가 발생하면 클릭된 버튼의 data-value 값을 calculate 함수에 전달
    button.addEventListener('click', e => calculate(e.target.dataset.value));
});
