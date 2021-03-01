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
    function handleButtonClick(e) {
        e.target.textContent = "Added";
        e.target.classList.add("disabled");
    }
    return (
        <div>
            <CardColumns>
                {players.map(player => (
                    <Card
                        bg="success"
                        key={player.id}
                        style={{
                            maxWidth: "300px",
                            height: "500px",
                        }}
                    >
                        <Card.Img
                            style={{
                                maxHeight: "200px",
                                maxWidth: "100%",
                                margin: "0 auto",
                            }}
                            variant="top"
                            src={player.photoUrl}
                        />
                        <Card.Body>
                            <Card.Title
                                as="h3"
                                style={{ textAlign: "center", height: "60px" }}
                            >
                                {player.name}
                            </Card.Title>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <strong>Role:</strong> {player.role}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <strong>Salary:</strong> ${player.salary}
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer style={{ textAlign: "center" }}>
                            <Button
                                variant="info"
                                onClick={e => {
                                    selectPlayer(player);
                                    handleButtonClick(e);
                                }}
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
