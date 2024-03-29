import { ROUTER_HOME } from "./router";
import { Container } from "./ui/container";
import { Route, Routes } from 'react-router'

export function PageHome () {
  return (
    <Container>
      <Routes>
        {ROUTER_HOME.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Container>
  )
}