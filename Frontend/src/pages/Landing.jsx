import AnimatedText from "../components/AnimateText.jsx";
import {Link} from "react-router-dom";
import Button from "../components/Button.jsx";

const Home = () => {
	return (
		<>
			<main className="z-10 m-auto flex min-h-[90vh] flex-col items-center space-y-10 bg-transparent">
				<div className="mt-20 flex flex-col items-center">
					<AnimatedText>
						🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-400"/>{' '}
						<span
							className={
								`animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
							}
						>
              Introducing ChatsApp
            </span>
					</AnimatedText>
					<div
						className="my-10 mt-10 max-w-[80vw] bg-gradient-to-br from-white to-white/30 bg-clip-text text-center text-3xl font-bold text-transparent shadow-lg md:text-7xl">
						Connect, Chat, and Call
						<br/>
						with Ease
					</div>
					<div className={'text-zinc-400'}>Experience seamless communication with ChatSia - your all-in-one
						platform for messaging.
					</div>

				</div>
				<Link to="/login">
					<Button type={'button'} variant={'secondary'} text={'Get started'} className={'h-11 rounded-3xl'}/>
				</Link>
			</main>
		</>
	);
};

export default Home;
