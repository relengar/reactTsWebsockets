import * as React from 'react';

class Navbar extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const { users, selectUser } = this.props;
        return (
            <div className="col-2">
                <ul>
                    {users.map(user => {
                        const name: string = user[0];
                        const id: string = user[1];
                        return <li key={id} onClick={selectUser}>
                            <h5>{name}</h5>
                            <p>{id}</p>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export interface Props {
    users: string[][];
    selectUser?: () => void;
  }

export default Navbar;