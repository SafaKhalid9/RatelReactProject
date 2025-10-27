import { useNavigate } from 'react-router-dom';
import '../styles/CardButton.css';
export default function CardButton({ icon: Icon, classname, to }) {
    const navigate = useNavigate();

    // const handleClick = () => {
    //   if (to) navigate(to); // إذا تم تمرير مسار ننتقل له
    //   else if (onClick) onClick(); // غير ذلك نفذ الدالة العادية
    // };
    return (
        <>
            <button
                onClick={() => {
                    navigate(to);
                }}
                className={classname}
            >
                {Icon}
            </button>
        </>
    );
}
