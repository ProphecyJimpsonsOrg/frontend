import { useState, useEffect } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as='div'
            variant='small'
            className='font-medium text-white hover:text-orange-500'
          >
            <ListItem
              className='flex items-center gap-2 py-2 pr-4 font-medium'
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Explore
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden rounded-xl lg:block'>
          <MenuItem className='text-black hover:text-orange-500'>
            Marketplace
          </MenuItem>
          <MenuItem className='text-black hover:text-orange-500'>
            Live Auction
          </MenuItem>
          <MenuItem className='text-black hover:text-orange-500'>
            Collections
          </MenuItem>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>
          <MenuItem className='text-black hover:text-orange-500'>
            Marketplace
          </MenuItem>
          <MenuItem className='text-black hover:text-orange-500'>
            Live Auction
          </MenuItem>
          <MenuItem className='text-black hover:text-orange-500'>
            Collections
          </MenuItem>
        </Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className='mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1'>
      <Typography
        as='a'
        href='#'
        variant='small'
        className='font-medium text-white hover:text-orange-500'
      >
        <ListItem className='flex items-center gap-2 py-2 pr-4'>Home</ListItem>
      </Typography>
      <Typography
        as='a'
        href='/create'
        variant='small'
        className='font-medium text-white hover:text-orange-500'
      >
        <ListItem className='flex items-center gap-2 py-2 pr-4'>Docs</ListItem>
      </Typography>
      <Typography
        as='a'
        href='#'
        variant='small'
        className='font-medium text-white hover:text-orange-500'
      >
        <ListItem className='flex items-center gap-2 py-2 pr-4 '>Blog</ListItem>
      </Typography>
      <Typography
        as='a'
        href='#'
        variant='small'
        className='font-medium text-white hover:text-orange-500'
      >
        <ListItem className='flex items-center gap-2 py-2 pr-4 '>
          Contact
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as='a'
        href='/create'
        variant='small'
        className='font-medium text-white hover:text-orange-500'
      >
        <ListItem className='flex items-center gap-2 py-2 pr-4'>
          Create NFT
        </ListItem>
      </Typography>
    </List>
  );
}

function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className='mx-auto max-w-screen-2xl px-4 py-2 pt-4 bg-transparent shadow-none border-none backdrop-filter-none'>
      <div className='flex items-center justify-between'>
        <Typography
          as='a'
          href='#'
          variant='h5'
          className='mr-4 cursor-pointer py-1.5 lg:ml-2 text-white hover:text-orange-500'
        >
          Prophecy Jimpsons
        </Typography>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <div className='hidden gap-2 lg:flex'>
          <ConnectWalletButton />
        </div>
        <IconButton
          variant='text'
          className='lg:hidden'
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6 text-white' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6 text-white' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className='flex w-full flex-nowrap items-center gap-2 lg:hidden'>
          <Button
            size='sm'
            fullWidth
            className='text-white hover:bg-orange-500'
          >
            Connect Wallet
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavigationBar;
