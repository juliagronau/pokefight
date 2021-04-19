import React, { useState } from 'react';

import { Box, Form, FormField, TextInput, Button, Heading } from 'grommet';

const Player = ({value, setValue}) => {


    return (
        <Box align="center" basis="full" background="white">
            <Heading> Introduce your Nickname</Heading>
                
            
                {/* <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onSubmit={({ value }) => {}}
                    >
                    <FormField name="name" htmlFor="text-input-id">
                        <TextInput id="text-input-id" name="name" />
                    </FormField>
                    <Box>
                        <Button type="submit" color="neutral-3" primary label="Submit" />
                       
                    </Box>
                </Form>  */}

                <Box>
                <div className="input-name">
                    <TextInput
                    placeholder="Introduce your nickname"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    />
                </div>
                </Box>
            </Box>
    )
}

export default Player;