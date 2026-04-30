'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                alert('로그인에 성공했습니다!');
                router.push('/welcome');
            } else {
                const data = await res.json();
                alert(data.error || '이메일 또는 비밀번호가 일치하지 않습니다.');
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
                    <h2>환영합니다</h2>
                    <p>서비스를 이용하시려면 로그인해주세요</p>
                </div>
                
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" name="email" placeholder="example@email.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" required value={formData.password} onChange={handleChange} />
                    </div>
                    
                    <div className="options-group">
                        <div className="checkbox-group">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">로그인 유지</label>
                        </div>
                        <a href="#" className="forgot-link">비밀번호 찾기</a>
                    </div>
                    
                    <button type="submit" className="btn-primary">로그인</button>
                </form>
                
                <div className="form-footer">
                    <p>계정이 없으신가요? <Link href="/signup">회원가입하기</Link></p>
                </div>
            </div>
        </div>
    );
}
