import * as Styles from "./style";
import { SvgHamburger } from "@/components/svg/SvgHamburger";
import { Button } from "@/components/Button";
import React from "react";
import { isMobile, isNotMobile } from "../../style/stitches.config";

export function Header() {
  return (
    <Styles.Header mobile={isMobile}>
      <Styles.HamburgerButton
        type="ghost"
        padding="even"
        hidden={isNotMobile}
      >
        <SvgHamburger />
      </Styles.HamburgerButton>
      <Styles.HeaderLeft>
        <Styles.LogoWithText>
          <Styles.Logo hidden={isMobile} />
          <Styles.LogoText>
            Killed by <Styles.LogoTextGoogle>Google</Styles.LogoTextGoogle>
          </Styles.LogoText>
        </Styles.LogoWithText>
        <Styles.NavLinks hidden={isMobile}>
          <Styles.NavLink selected={true}>Home</Styles.NavLink>
          <Styles.NavLink selected={false}>About</Styles.NavLink>
        </Styles.NavLinks>
      </Styles.HeaderLeft>
      <Styles.HeaderRight hidden={isMobile}>
        <Button type="ghostAccented">Submit an Issue</Button>
        <Button type="primary">Submit an Issue</Button>
      </Styles.HeaderRight>
    </Styles.Header>
  );
}
