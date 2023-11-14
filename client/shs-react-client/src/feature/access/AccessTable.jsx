function AccessTable({ mainUser, accessData, cb }) {
  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          LIST OF USERS
        </h5>
        {/*-- USER TABLE --*/}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Email</th>
              <th scope="col" colSpan="2">
                Access
              </th>
            </tr>
          </thead>
          <tbody>
            {accessData.users.map((user, i) => {
              return mainUser.id === user._id ? (
                ""
              ) : (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ? "ACCESS" : "PROHIBITED"}</td>
                  <td className="text-end">
                    {user.isAdmin ? (
                      <button
                        onClick={() => cb(i)}
                        className="btn btn-dark roboto px-4 m-0 fs-6"
                      >
                        ALLOW
                      </button>
                    ) : (
                      <button
                        onClick={() => cb(i)}
                        className="btn btn-danger roboto px-4 m-0 fs-6"
                      >
                        NOT ALLOW
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default AccessTable;
