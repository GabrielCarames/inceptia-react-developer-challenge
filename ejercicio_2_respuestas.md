2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por ejemplo autenticación, solicitud de clientes activos para el usuario y solicitud de casos por cliente)

En este caso específico de prueba técnica solo utilicé Redux para manejar el estado de la autenticación, ya que se compartía entre varios componentes. Para los otros casos no fué necesario administrar un estado global porque que los datos solo se manejaban en un componente padre y se pasaban a los hijos como props.

Sin embargo, si se quisiera escalar la aplicación e implementar otro slice para por ejemplo el manejo de los clientes activos del usuario, se debería seguir los siguientes pasos:

1. Colocar un nuevo slice en la store para manejar el estado de los clientes activos.
2. Crear un extra reducer con createAsyncThunk para manejar la acción de solicitar los clientes activos del usuario a la API.
3. Crear un componente que utilice un dispatch para solicitar los clientes activos del usuario junto a un useSelector para obtener los datos.

2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías el index.js?

Dentro del archivo main.tsx se debería agregar una nueva ruta en el componente Route. Luego al acceder a esta ruta, se debe mostrar un nuevo componente.
Ejemplo:

```tsx
<BrowserRouter>
  <AuthProvider>
    <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<PrivateRoute Component={App} />}>
        <Route path="nueva-ruta" component={NuevoComponente} />
      </Route>
      // Otras rutas...
    </Routes>
  </AuthProvider>
</BrowserRouter>
```
