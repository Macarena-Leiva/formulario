export const Formulario = () =>{
    return(
        <form action="">
            <label htmlFor="">Nombre</label>
            <input type="text" name="" id="" />

            <label htmlFor="">Apellido</label>
            <input type="text" name="" id="" />

            <label htmlFor="">Fecha de Nacimiento</label>
            <input type="date" name="" id="" />

            <label htmlFor="">Telefono</label>
            <input type="tel" name="" id="" />

            <label htmlFor="">E-mail</label>
            <input type="email" name="" id="" />

            <label htmlFor="">Usuario</label>
            <input type="text" name="" id="" />

            <label htmlFor="">contraseña</label>
            <input type="password" name="" id="" />

            <label htmlFor="">Repetir contraseña</label>
            <input type="password" name="" id="" />

        <div className="btn">
            <button type="submit">Enviar</button>
            <button type="reset">Borrar</button>
        </div>   

        </form>
    )
}