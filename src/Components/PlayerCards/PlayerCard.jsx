import React from "react";
import {
    CardColumns,
    Card,
    ListGroupItem,
    ListGroup,
    Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const PlayerCard = ({ players, selectPlayer }) => {
    return (
        <div>
            <CardColumns>
                {players.map(player => (
                    <Card key={player.id} style={{ maxWidth: "300px" }}>
                        <Card.Img
                            style={{ maxHeight: "300px", maxWidth: "300px" }}
                            variant="top"
                            src={player.photoUrl}
                        />
                        <Card.Body>
                            <Card.Title as="h2" style={{ textAlign: "center" }}>
                                {player.name}
                            </Card.Title>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <strong>Role:</strong> {player.role}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <strong>Phone:</strong> {player.phone}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <strong>Email:</strong> {player.email}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <strong>Salary:</strong> BDT-
                                    {player.salary}
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: "center" }}>
                            <Button
                                variant="info"
                                onClick={() => selectPlayer(player)}
                            >
                                Add to Team{" "}
                                <FontAwesomeIcon icon={faUserPlus} />
                            </Button>
                        </Card.Footer>
                    </Card>
                ))}
            </CardColumns>
        </div>
    );
};

export default PlayerCard;
