//firebase
import { logout, auth } from "../../firebase";
//asset
import user_icon from "../../assets/user_icon.png.jpg";

function AccountMenu({ visible }) {
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute cursor-auto top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="w-full flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src={user_icon} alt="user_icon" />

          <p className="text-white text-sm group-hover/item:underline">
            {auth.currentUser.email}
          </p>
        </div>

        <hr className="bg-gray-600 border-0 h-px my-4" />

        <div className="px-3 text-center text-white text-sm hover:underline">
          <span className="cursor-pointer" onClick={() => logout()}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default AccountMenu;
