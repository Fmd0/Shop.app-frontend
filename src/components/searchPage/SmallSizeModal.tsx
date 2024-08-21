import {useEffect, useState} from "react";
import {getParamArrayFromURL} from "../../utils/searchPageUtils.ts";
import SizeModalItem from "./SizeModalItem.tsx";
import {useSearchInfoStore} from "../../hooks/useSearchInfoStore.ts";


const SmallSizeModal = () => {


    const [formControlState, setFormControlState] = useState<string[]>(getParamArrayFromURL("size"))

    const {
        sizeModalOpen: modalOpen,
        toggleSizeModalOpen: toggleModalOpen,
        setSize: setState
    } = useSearchInfoStore();

    useEffect(() => {
        setFormControlState(getParamArrayFromURL("size"));
    }, [modalOpen]);


    return (
        <div className={`touch-none fixed z-50 inset-0 bg-[rgba(0,0,0,0.4)] text-nowrap font-medium duration-200 transform-gpu md:hidden ${modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={() => toggleModalOpen()}>

            <div
                className={`fixed bottom-4 left-4 right-4 bg-white pt-1 pb-5 px-5 rounded-3xl transform-gpu duration-200 ${modalOpen ? "translate-y-0" : "translate-y-full"}`}
                onClick={e => e.stopPropagation()}>

                <div className="py-3 flex flex-row items-center justify-between">
                    <span className="text-[18px]">Size</span>
                    <div onClick={() => toggleModalOpen()}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="size-5 text-[rgb(111_112_113)]" data-testid="icon-cross-circle-filled"
                             stroke="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                                  fill="currentColor"></path>
                        </svg>
                    </div>
                </div>


                {
                    ["S", "M", "L", "XL", "2XL"].map((item) => (
                        <SizeModalItem key={item} formControlState={formControlState}
                                       setFormControlState={setFormControlState} value={item} textValue={item}/>
                    ))
                }

                {/*reset and done button*/}
                <div className="grid grid-cols-2 gap-2 text-center mt-4 text-[16px]">
                    <button type="button"
                        className="bg-neutral-100 duration-200 hover:bg-neutral-200 text-black py-3 rounded-[12px] cursor-pointer"
                        onClick={() => setFormControlState([])}>
                        Reset
                    </button>
                    <button type="button"
                        className="bg-black duration-200 hover:bg-neutral-800 text-white py-3 rounded-[12px] cursor-pointer"
                        onClick={() => {
                            setState(formControlState);
                            toggleModalOpen();
                        }}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SmallSizeModal;