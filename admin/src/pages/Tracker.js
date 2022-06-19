import { Form, Input } from 'antd';
import React from 'react';
// import { useHistory } from 'react-router-dom';


function Tracker({ searchQuery, setSearchQuery, placeholder, label }) {

    // const history = useHistory();
    // const onSubmit = (e) => {
    //     history.push(`?s=${searchQuery}`);
    //     e.preventDefault();
    // };

    return (
        <div>
            <form
                action="/"
                method="get"
                autoComplete="off"
                // onSubmit={onSubmit}
            >
                <Form
                    layout="vertical"
                    className="row-col"
                >
                    <Form.Item
                        className="username"
                        label={label}
                        name="tracker"
                    >
                        <Input
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label={label}
                            value={searchQuery}
                            onInput={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            id="tracker"
                            placeholder={placeholder}
                            name="tracker"
                        />
                    </Form.Item>
                </Form>
            </form>
        </div>
    )
}

export default Tracker