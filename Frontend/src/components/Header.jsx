import Button from './Button';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function Header() {
	const {Authuser} = useAuthContext();
	return (
		<div
			className={
				'sticky top-0 z-50 mx-auto max-w-[100rem] items-center justify-between border-b-2 border-zinc-800 bg-zinc-900 bg-opacity-30 bg-clip-padding backdrop-blur-sm backdrop-filter transition-all md:px-10'
			}
		>
			<div className="flex items-center justify-between px-5 py-2 md:px-9 md:py-5">
				<div className="text-xl md:text-3xl">
					<Link to={'/'} className="flex items-center space-x-1">
						<span className="font-bold">ChatsApp</span>
					</Link>
				</div>
               {
                 !Authuser && ( 
					<Link to="/login">
						<Button type={'button'} variant={'outlineB'} text={'Sign in'} />
					</Link>
				)
			   }
				
			</div>
		</div>
	);
}

export default Header;
