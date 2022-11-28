import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import styled from 'styled-components'
import FeedPetModal from '../Modals/FeedPetModal'

const ModalMainWrapper = styled.div`
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
`

const ModalInnerWrapper = styled.div`
    margin: 2rem 10px 10px 10px;
`

const ModalContainer = styled.div`
    max-width: 50rem;
    margin: 0px auto;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    z-index: 1000;
`

const ModalHeader = styled.div`
    background-color: #FFC0CB;
    padding: 10px;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
`

const ModalTitle = styled.h3`
    align-self: center;
    width: 100%;
`

const ModalBody = styled.div`
    padding: 20px;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 35rem;
    overflow: auto;
`

const ModalFooter = styled.div`
    padding: 20px 30px;
    background-color: white;
    display: flex;
    justify-content: flex-end;
`

const ModalCloseBtn = styled.button`
    background-color: #FFC0CB;
    border: none;
    padding: 5px;
    width: 5rem;
    color: white;
    cursor: pointer;
    font-weight: 600;

    &:focus {
        border: none;
        outline: none;
    }
`

export const Modal = (props) => {
   const { open, type, title, close, save } = props;
   let component = null, btnText = 'Save';;
   switch(type) {
        case "feedPet": {
            component = <FeedPetModal {...props} />
            break;
        }

        default: <div>No Modals Found</div>
   }


   return (
    open && <ModalMainWrapper>
        <ModalInnerWrapper>
            <ModalContainer>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <FaRegTimesCircle 
                        style={{
                            alignSelf: 'flex-end',
                            fontSize: '1.5rem',
                            cursor: 'pointer'
                        }}
                        onClick={props.close}
                    />
                </ModalHeader>

                <ModalBody>
                    {component}
                </ModalBody>

                <ModalFooter>
                    <ModalCloseBtn onClick={close}>Close</ModalCloseBtn>
                </ModalFooter>

            </ModalContainer>
        </ModalInnerWrapper>
    </ModalMainWrapper>
   );
}