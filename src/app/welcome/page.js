'use client';
import { useRouter } from 'next/navigation';

export default function Welcome() {
    const router = useRouter();

    const handleLogout = () => {
        alert('로그아웃 되었습니다.');
        router.push('/');
    };

    return (
        <div className="container">
            <div className="glass-panel" style={{ textAlign: 'center' }}>
                <div className="form-header">
                    <h2>환영합니다!</h2>
                    <p>성공적으로 로그인하셨습니다.</p>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <button onClick={handleLogout} className="btn-primary">로그아웃</button>
                </div>
            </div>
        </div>
    );
}
