import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import * as S from "./styles";
import HomeIcon from "@components/Icons/Home";
import SearchIcon from "@components/Icons/Search";
import EreaderIcon from "@components/Icons/Ereader";
import SunIcon from "@components/Icons/Sun";
import GhostIcon from "@components/Icons/Ghost";

const Menu: React.FC = () => {
  return (
    <S.Menu>
      <ul>
        <S.MenuItem>
          <HomeIcon />
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </S.MenuItem>

        <S.MenuItem>
          <EreaderIcon />
          <Link to="/blog">Blog</Link>
        </S.MenuItem>

        <S.MenuItem>
          <GhostIcon />
          <Link to="/portfolio">Portfólio</Link>
        </S.MenuItem>

        <S.MenuItem>
          <SearchIcon />
          <Link to="/search">Buscar</Link>
        </S.MenuItem>
        <S.MenuItem>
          <SunIcon />
        </S.MenuItem>
      </ul>
    </S.Menu>
  );
};

export default Menu;