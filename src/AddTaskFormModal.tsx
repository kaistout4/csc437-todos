import { useRef, ReactNode } from 'react'

interface ModalProps {
    isOpen: boolean;
    onCloseRequested: () => void;
    headerLabel: string;
    children: ReactNode;
}

function Modal(props: ModalProps) {
    const innerDivRef = useRef<HTMLDivElement>(null);

    if (!props.isOpen) {
        return null;
    }

    function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
        if (innerDivRef.current && !innerDivRef.current.contains(event.target as Node)) {
            props.onCloseRequested();
        }
    }

    return (
        <div 
            className="fixed inset-0 w-screen h-screen bg-black/50 flex items-center justify-center"
            onClick={handleOverlayClick}
        >
            <div ref={innerDivRef} className="bg-white p-6 rounded">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{props.headerLabel}</h2>
                    <button 
                        onClick={props.onCloseRequested}
                        className="text-gray-500 hover:text-gray-700" 
                        aria-label="Close"
                    >
                        X
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export { Modal };