import React, {useState} from 'react';
import './styles/resume.css';

export default function Resume() {
    const [loading, setLoading] = useState(true);
    const handleDocumentLoaded = () => setLoading(false);

    return (
        <div>
            <h1>Curriculum</h1>
            {loading ? <p>Cargando...</p> : ''}
            <div className="cvContainer">
                <iframe
                    title="CV"
                    src="https://drive.google.com/file/d/1VvV2UVIuRCj7QiYzEluEVlpeCnRicZrZ/preview"
                    onLoad={handleDocumentLoaded}
                />
            </div>
        </div>
    )
}