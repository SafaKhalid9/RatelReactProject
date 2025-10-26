import CardButton from './CardButton';
import '../styles/Card.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Card({ image, title, fields }) {
    return (
        <div className="col card">
            <div className="c-card">
                <div className="row">
                    <div className="card-content">
                        <div className="card-img">
                            <img className="img-fluid" src={image} alt="صورة" />
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>

                                {fields.map((field, index) => (
                                    <p key={index} className="card-text">
                                        <strong>{field.label}:</strong>{' '}
                                        {field.value || '—'}
                                    </p>
                                ))}

                                <div className="buttons">
                                    <CardButton
                                        icon={
                                            <VisibilityIcon
                                                sx={{
                                                    width: {
                                                        xs: '0.9rem', // للجوال
                                                        sm: '1.2rem',
                                                        md: '1.5rem',
                                                    },
                                                    height: {
                                                        xs: '0.9rem',
                                                        sm: '1.2rem',
                                                        md: '1.5rem',
                                                    },
                                                }}
                                            />
                                        }
                                        classname="success btn"
                                        to=""
                                    />
                                    <CardButton
                                        icon={
                                            <EditIcon
                                                sx={{
                                                    width: {
                                                        xs: '0.9rem', // للجوال
                                                        sm: '1.2rem',
                                                        md: '1.5rem',
                                                    },
                                                    height: {
                                                        xs: '0.9rem',
                                                        sm: '1.2rem',
                                                        md: '1.5rem',
                                                    },
                                                }}
                                            />
                                        }
                                        classname="btn success"
                                        to=""
                                    />
                                    <CardButton
                                        icon={
                                            <DeleteIcon
                                                sx={{
                                                    width: {
                                                        xs: '0.9rem', // للجوال
                                                        sm: '1.2rem',
                                                        md: '1.5rem',
                                                    },
                                                    height: {
                                                        xs: '0.9rem',
                                                        sm: '1.2rem',
                                                        md: '1.5rem',
                                                    },
                                                }}
                                            />
                                        }
                                        classname="btn delete"
                                        to=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
