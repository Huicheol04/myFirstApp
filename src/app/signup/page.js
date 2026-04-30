'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Signup() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
            return;
        }

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullname: formData.fullname,
                    email: formData.email,
                    password: formData.password
                })
            });

            if (res.ok) {
                alert('회원가입이 완료되었습니다!');
                router.push('/login');
            } else {
                const data = await res.json();
                alert(data.error || '회원가입에 실패했습니다.');
            }
        } catch (error) {
            console.error(error);
            alert('오류가 발생했습니다.');
        }
    };

    return (
        <div className="container">
            <div className="glass-panel">
                <div className="form-header">
                    <h2>계정 만들기</h2>
                    <p>몇 가지 정보만 입력하면 준비가 완료됩니다!</p>
                </div>
                
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <label htmlFor="fullname">이름</label>
                        <input type="text" id="fullname" name="fullname" placeholder="홍길동" required value={formData.fullname} onChange={handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" name="email" placeholder="example@email.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" name="password" placeholder="8자 이상 입력하세요" minLength="8" required value={formData.password} onChange={handleChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirmPassword">비밀번호 확인</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="비밀번호를 다시 입력하세요" minLength="8" required value={formData.confirmPassword} onChange={handleChange} />
                    </div>
                    
                    <button type="submit" className="btn-primary">가입하기</button>
                </form>
                
                <div className="form-footer">
                    <p>이미 계정이 있으신가요? <Link href="/login">로그인하기</Link></p>
                </div>
            </div>
        </div>
    );
}
