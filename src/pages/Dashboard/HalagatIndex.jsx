import { useHalaqat } from '../../Contexts/HalaqatContext';
import Card from '../../components/Card';
import IndexTopSection from '../../components/IndexTopSection';
import '../../styles/Card.css';
import img1 from '../../assets/images/cardbg1.jpg';

export default function HalaqatIndex() {
    const { data: halagat, loading } = useHalaqat();

    if (loading) return <p className="text-center mt-10">جاري التحميل...</p>;

    return (
        <>
            <IndexTopSection
                endpoint="https://jsonplaceholder.typicode.com/users"
                contextHook={useHalaqat}
                addLabel="إضافة حلقة جديدة"
                title="قائمة الحلقات"
                onAddClick={() => alert('تمت إضافة حلقة جديدة')}
            />

            <div className="card-container">
                {halagat.slice(0, 10).map((h) => (
                    <Card
                        key={h.id}
                        image={img1}
                        title={h.name}
                        fields={[
                            { label: 'المعلمة', value: h.username },
                            { label: 'السنة الدراسية', value: h.email },
                        ]}
                    />
                ))}
            </div>
        </>
    );
}
