'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    
    return (
        <div className="container">
            <div className="glass-panel" style={{ textAlign: 'center' }}>
                <div className="form-header">
                    <h2>메인 페이지</h2>
                    <p>환영합니다! 원하시는 서비스로 이동해주세요.</p>
                </div>

                <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                    <button onClick={() => router.push('/login')} className="btn-primary" style={{ marginTop: 0 }}>로그인</button>
                    <button onClick={() => router.push('/signup')} className="btn-primary"
                        style={{ marginTop: 0, background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.4)', color: '#fff' }}>회원가입</button>
                </div>
            </div>
        </div>
    );
}
