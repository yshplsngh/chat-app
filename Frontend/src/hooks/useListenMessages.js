import useConversation from '../zustand/useConversation';
import { useSocketContext } from '../context/SocketContext';
import { useEffect } from 'react';
import soundnoti from "../assets/sound/soundnoti.mp3"

const useListenMessages = () => {
    const { soket } = useSocketContext();
	const { messages, setMessage } = useConversation();

	useEffect(() => {
		soket?.on("newMessage", (newMessage) => {
			// newMessage.shouldShake = true;
			const sound = new Audio(soundnoti);
			sound.play();
			setMessage([...messages, newMessage]);
		});

		return () => soket?.off("newMessage");
	}, [soket, setMessage, messages]);
}

export default useListenMessages