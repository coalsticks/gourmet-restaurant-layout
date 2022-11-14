import { Menu } from "@headlessui/react";

export const DropDownMenu = ({
  menuBtn,
  menuData,
}) => {
  return (
    <div className="">
      <Menu>
        <Menu.Button>{menuBtn}</Menu.Button>
        <Menu.Items
          className={
            " grid grid-cols-2 right-4 p-10 w-max gap-x-12 gap-y-4 bg-white absolute border shadow-md rounded-sm z-20"
          }
        >
          <p className="col-span-2 font-semibold text-base text-gray-400 text-center border-b pb-4">Menu</p>
          {menuData.map((menuItem) => {
            return (
              <Menu.Item key={menuItem.href}>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"} uppercase`}
                    href={menuItem.href}
                  >
                    {menuItem.content}
                  </a>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </div>
  );
};
