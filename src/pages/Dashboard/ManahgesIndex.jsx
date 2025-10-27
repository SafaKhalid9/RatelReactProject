import { useManhaj } from '../../Contexts/ManhajContext';
import Card from '../../components/Card';
import IndexTopSection from '../../components/IndexTopSection';
import '../../styles/Card.css';

export default function ManahgesIndex() {
    const { data: manahij, loading } = useManhaj();

    if (loading) return <p className="text-center mt-10">جاري التحميل...</p>;

    return (
        <>
            <IndexTopSection
                endpoint="https://jsonplaceholder.typicode.com/posts"
                contextHook={useManhaj}
                addLabel="إضافة منهج جديد"
                title="قائمة المناهج"
                onAddClick={() => alert('إضافة منهج جديد')}
            />

            <div className="card-container">
                {manahij.slice(0, 10).map((m) => (
                    <Card
                        key={m.id}
                        image="/images/ManahjPic.jpg"
                        title={m.title}
                        fields={[
                            { label: 'المعرف', value: m.id },
                            {
                                label: 'الوصف',
                                value: m.body?.slice(0, 50) + '...',
                            },
                        ]}
                    />
                ))}
            </div>
        </>
    );
}
