import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'

export const ProfileMenu = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Me
    </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
  )
}
